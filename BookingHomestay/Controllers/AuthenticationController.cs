using BookingHomestay.API.DTOs;
using BookingHomestay.API.Services.User;
using BookingHomestay.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingHomestay.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        IUserService userService;
        IJwtTokenGenerator jwtTokenGenerator;
        public AuthenticationController(IUserService userService, IJwtTokenGenerator jwtTokenGenerator) 
        {
            this.userService = userService;
            this.jwtTokenGenerator = jwtTokenGenerator;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]UserAuthenDTO userDTO)
        {
            string token = "";
            var user = await userService.Authenticate(userDTO);

            if (user != null)
            {
                token = jwtTokenGenerator.GenerateToken(user.ID, user.Email, user.FullName, user.Password);
            }
            return Ok(token);
        }
    }
}
