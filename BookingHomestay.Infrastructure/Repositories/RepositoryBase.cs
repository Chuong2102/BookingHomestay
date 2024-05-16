using BookingHomestay.Domain.Entities;
using BookingHomestay.Domain.Interfaces;
using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System.Linq.Expressions;

namespace BookingHomestay.Infrastructure.Repositories
{
    public class RepositoryBase<T> : IAsyncRepository<T> where T : class
    {
        readonly DbSet<T> dbContext;

        public RepositoryBase(BookingHomestayDbContext dbContext)
        {
            this.dbContext = dbContext.Set<T>();
        }

        public async Task<T> AddAsync(T entity)
        {
            await dbContext.AddAsync(entity);

            return entity;
        }

        public Task<bool> DeleteAsync(T entity)
        {
            dbContext.Remove(entity);

            return Task.FromResult(true);
        }

        public async Task<List<T>> GetAllAsync(Expression<Func<T, bool>> expression)
        {
            return await dbContext.Where(expression).ToListAsync();
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await dbContext.ToListAsync();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> expression)
        {
            return await dbContext.FirstOrDefaultAsync(expression);
        }

        public Task<T> UpdateAsync(T entity)
        {
            dbContext.Update(entity);
            return Task.FromResult(entity);
        }

       
    }
}
