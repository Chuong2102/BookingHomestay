using System.Linq.Expressions;

namespace BookingHomestay.Domain.Interfaces
{
    public interface IAsyncRepository<T> where T : class
    {
        Task<T> AddAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task<bool> DeleteAsync(T entity);
        Task<T> GetAsync(Expression<Func<T, bool>> expression);
        Task<List<T>> GetAllAsync(Expression<Func<T, bool>> expression);
        Task<List<T>> GetAllAsync();

    }
}
