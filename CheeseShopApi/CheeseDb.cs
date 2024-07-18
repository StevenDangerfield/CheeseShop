using CheeseShopApi;
using Microsoft.EntityFrameworkCore;

class CheeseDb : DbContext
{
    public CheeseDb(DbContextOptions<CheeseDb> options)
        : base(options) { }

    public DbSet<Cheese> Cheeses => Set<Cheese>();
}