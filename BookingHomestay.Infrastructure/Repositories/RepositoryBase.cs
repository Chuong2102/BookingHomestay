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
        readonly BookingHomestayDbContext dbContext;

        public RepositoryBase(BookingHomestayDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<T> AddAsync(T entity)
        {
            var _entity = await dbContext.Set<T>().AddAsync(entity);
            await dbContext.SaveChangesAsync();

            return _entity.Entity;
        }

        public Task<bool> DeleteAsync(T entity)
        {
            dbContext.Set<T>().Remove(entity);
            dbContext.SaveChanges();

            return Task.FromResult(true);
        }

        public async Task<List<T>> GetAllAsync(Expression<Func<T, bool>> expression)
        {
            return await dbContext.Set<T>().Where(expression).ToListAsync();
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await dbContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> expression)
        {
            return await dbContext.Set<T>().FirstOrDefaultAsync(expression);
        }

        public Task<T> UpdateAsync(T entity)
        {
            dbContext.Set<T>().Update(entity);
            dbContext.SaveChanges();
            return Task.FromResult(entity);
        }

       
    }
}
