using Microsoft.EntityFrameworkCore;

namespace CheeseShopApi
{
    public class EndpointsMapper
    {
        public static void MapEndpoints(WebApplication app)
        {
            app.MapGet("/CheeseList", async (CheeseDb db) =>
                await db.Cheeses.ToListAsync());

            app.MapGet("/Cheese/{id}", async (int id, CheeseDb db) =>
                await db.Cheeses.FindAsync(id)
                    is Cheese Cheese
                        ? Results.Ok(Cheese)
                        : Results.NotFound());

            app.MapPost("/Cheese", async (Cheese Cheese, CheeseDb db) =>
            {
                db.Cheeses.Add(Cheese);
                await db.SaveChangesAsync();

                return Results.Created($"/Cheese/{Cheese.Id}", Cheese);
            });

            app.MapPut("/Cheese/{id}", async (int id, Cheese inputCheese, CheeseDb db) =>
            {
                var Cheese = await db.Cheeses.FindAsync(id);

                if (Cheese is null)
                {
                    return Results.NotFound();
                }

                Cheese.Name = inputCheese.Name;
                Cheese.PricePerKilo = inputCheese.PricePerKilo;
                Cheese.Colour = inputCheese.Colour;
                Cheese.Photo = inputCheese.Photo;

                await db.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("/Cheese/{id}", async (int id, CheeseDb db) =>
            {
                if (await db.Cheeses.FindAsync(id) is Cheese Cheese)
                {
                    db.Cheeses.Remove(Cheese);
                    await db.SaveChangesAsync();
                    return Results.NoContent();
                }

                return Results.NotFound();
            });
        }
    }
}