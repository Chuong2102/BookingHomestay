using BookingHomestay.API.Services.Room;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Interfaces;
using BookingHomestay.Infrastructure.Repositories;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddTransient<IRoomService, RoomService>();
builder.Services.RegisterServices();


builder.Services.AddControllers();

BookingHomestay.Infrastructure.Dependencies.ConfigureServices(builder.Configuration, builder.Services);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
