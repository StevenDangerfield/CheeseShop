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

// TODO: Remove hard-coded data
// TODO: Use a database for persistence; probably in-memory to start off, then evolve to a SQLite DB stored locally
var cheeses = SampleData.GetData();

// TODO: Add more endpoints to handle CRUD
app.MapGet("/cheeses", () =>
{
    return cheeses;
})
.WithName("GetCheeses")
.WithOpenApi();

app.Run();

