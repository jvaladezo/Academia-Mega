using PrimeraApi2.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<ProductoService>();
builder.Services.AddScoped<UsuarioService>();
var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();
