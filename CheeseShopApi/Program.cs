using CheeseShopApi;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<CheeseDb>(opt => opt.UseInMemoryDatabase("Cheeses"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowReactApp");

// TODO: Remove hard-coded data
var cheeses = SampleData.GetData();

app.MapGet("/cheeses", () =>
{
    return cheeses;
})
.WithName("GetCheeses")
.WithOpenApi();

app.MapGet("/Cheese", async (CheeseDb db) =>
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

app.Run();

