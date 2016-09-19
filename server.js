var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
                  'article-one' : {
                                title: 'Article One | Chayan',
                                heading: 'Article One',
                                date: 'September 19,2016',
                                content: ` <p>
                                                This is the content of my article.
                                            </p>
                                            <p>
                                                In a  step-by-step initiatic process, coordinated and orchestrated by the Higher Self of the soul under the cosmic beings and Ascended Masters who govern the destiny of earth, the soul rises to the heart and merges with the Higher Self. The consciousness that has awareness as the spiritual self, while yet existing in the world, begins the path of Being the Mother. This path is equally difficult to Being the Christ. Like the mass consciousness of the world against the Christ, so too is the mass consciousness against the Mother. The world has raised up the Great Whore image of Mother as the perfect expression of nurturance. When the true Mother Light shines forth to defend truth and Being, bringing compassion, mercy and judgment, her Being is rejected and condemned by the ungodly.
                                            </p>`},
                
                'article-two' : {   title: 'Article Two | Chayan',
                                heading: 'Article Two',
                                date: 'September 20,2016',
                                content: ` <p>
                                                This is the content of my article.
                                            </p>
                                            <p>
                                                In a  step-by-step initiatic process, coordinated and orchestrated by the Higher Self of the soul under the cosmic beings and Ascended Masters who govern the destiny of earth, the soul rises to the heart and merges with the Higher Self. The consciousness that has awareness as the spiritual self, while yet existing in the world, begins the path of Being the Mother. 
                                            </p> `},
                                            
                'article-three' : {      title: 'Article Three | Chayan',
                                heading: 'Article Three',
                                date: 'September 21,2016',
                                content: ` <p>
                                                This is the content of my article.
                                            </p>
                                            <p>
                                                This path is equally difficult to Being the Christ. Like the mass consciousness of the world against the Christ, so too is the mass consciousness against the Mother. The world has raised up the Great Whore image of Mother as the perfect expression of nurturance. When the true Mother Light shines forth to defend truth and Being, bringing compassion, mercy and judgment, her Being is rejected and condemned by the ungodly.
                                            </p> `}
};                


function createTemplate(data)
{            
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

                var htmlTemplate = `
                <html>
                    <head> 
                          <title>
                             ${title}
                             </title>
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                        <body>
                      <div class="container">
                               <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h3>
                            ${heading}
                            </h3>
                            <div>
                                ${date}
                                </div>
                            <div>
                                ${content}
                            </div>
                       </div>
                       </body>
                </html> 
                    `;
        
        return htmlTemplate;         
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) { 
    
    var articleName = req.params.articleName;
    
    // :articleName = article-one here for URL. Provided by the express framework.
    
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
