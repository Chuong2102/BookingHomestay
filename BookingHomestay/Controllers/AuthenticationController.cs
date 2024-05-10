using BookingHomestay.API.DTOs;
using BookingHomestay.API.Services.Authentication;
using BookingHomestay.API.Services.User;
using BookingHomestay.Domain.Interfaces;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using BookingHomestay.API.Helpers;
using BookingHomestay.Infrastructure.Repositories.Authentication;
using System.Text;

namespace BookingHomestay.API.Controllers
{
    [Route("api/v1/")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        IUserService userService;
        IAuthenticaionService authenticaionService;
        IJwtTokenGenerator jwtTokenGenerator;
        public AuthenticationController(IUserService userService, IJwtTokenGenerator jwtTokenGenerator, IAuthenticaionService authen) 
        {
            this.userService = userService;
            this.jwtTokenGenerator = jwtTokenGenerator;
            this.authenticaionService = authen;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]UserAuthenDTO userDTO)
        {
            string token = "";
            string username = "";
            int userID = 0;

            IActionResult response = Unauthorized();

            var user = await userService.Authenticate(userDTO);

            if (user != null)
            {
                token = jwtTokenGenerator.GenerateToken(user.ID, user.Email, user.FullName, user.Password);
                username = user.UserName;

                response = Ok(new { username, token });
            }
            

            return response;
        }

        [AllowAnonymous]
        [HttpPost("google")]
        public async Task<IActionResult> Google([FromBody] GoogleToken token)
        {
            try
            {
                var payload = GoogleJsonWebSignature.ValidateAsync(token.credential, new GoogleJsonWebSignature.ValidationSettings()).Result;
                var user = await authenticaionService.Authenticate(payload);

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.ID.ToString()),
                    new Claim(JwtRegisteredClaimNames.GivenName, user.Email),
                    new Claim(JwtRegisteredClaimNames.FamilyName, user.FullName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString())
                };


                var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AppSettings.appSettings.JwtSecret));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var jwtToken = new JwtSecurityToken(
                    "BookingHomestay",
                    "BookingHomestayUser",
                    claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: creds);
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(jwtToken)
                });

            }
            catch (Exception ex)
            {
                BadRequest(ex.Message);
            }

            return BadRequest();
        }


    }
}
