// setting up the MVC app
var builder = WebApplication.CreateBuilder(args);

// add MVC services
builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseStaticFiles();
app.UseDefaultFiles();
// set up middleware
app.UseStaticFiles();
app.UseRouting();

// default route goes to Home/Index
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
