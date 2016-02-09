var appRouter = function(app) {
 app.get("/", function(req, res) {
     res.send("Hello World");
 });
 
 app.get("/reverse.json", function(req,res) {
     
     
     res.send("IN_REVERSE");
 });

 app.get("/health.json", function(req,res) {
     res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify( {status:'UP'} ));
 });

}
 
module.exports = appRouter;
