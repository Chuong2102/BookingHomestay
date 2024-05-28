﻿using BookingHomestay.Domain.Entities.CommonEnities;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Domain.Entities.UserAggregate;
using BookingHomestay.Domain.EntitiesConfiguration;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace BookingHomestay.Infrastructure.Context
{
    public class BookingHomestayDbContext : DbContext
    {
        public BookingHomestayDbContext(DbContextOptions<BookingHomestayDbContext> options) : base(options)
        {

        }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Province> Provinces { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Comment> Comments { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoomConfiguration());
        }
    }
}
