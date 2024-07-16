var builder = WebApplication.CreateBuilder(args);

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

var cheeses = new Cheese[]
{
    new(1, "Cheddar"),
    new(2, "Brie"),
    new(3, "Camembert"),
    new(4, "Jarlsberg"),
    new(5, "Swiss")
};

app.MapGet("/cheeses", () =>
{
    return cheeses;
})
.WithName("GetCheeses")
.WithOpenApi();

app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.Run();

record Cheese(int id, string name)
{
    
}
