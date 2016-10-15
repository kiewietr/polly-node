var https = require('https')

module.exports = function(apiToken) {

    Polly = {}
    
    Polly.settings = {
        host: 'api.polly.help',
        version: 'api/v1',
        'polly-api-token' : apiToken
    },
    
    Polly.publication = {
        
        get (req,res) {
            Polly.makeRequest(req,res,`/publication/${req.params._pubId}`)
        },
        
        search (req,res) {
            Polly.makeRequest(req,res,`/publication/${req.params._pubId}/search/${req.params._searchQuery}`)
        },
        
        mostpopular (req,res) {
            
        }

    },
    
    Polly.collection = {
        
        get (req,res) {
            
        }
    },
    
    Polly.article = {
        
        get (req,res) {
            
        }
    },
    
    Polly.decision_tree = {
        
        get (req,res) {
            
        },
        
        answer (req,res) {
            
        }
    },
    
    Polly.makeRequest = function (req,res,url) {
        
        var options = {
            host: Polly.settings.host,
            path: `/${Polly.settings.version}${url}`,
            headers: {
              'polly-api-token': Polly.settings['polly-api-token']
            }
          };
        
          var req = https.get(options, (response) => {
            // console.log('statusCode:', response.statusCode);
            // console.log('headers:', response.headers);

            response.setEncoding('utf8');
            
            var data = ''
          
            response.on('data', (d) => {
                data += d
            });
            
            response.on('end', ()=> {
                res.setHeader('Content-Type', 'application/json');
                res.status(200)
                res.send(data)
            })

          }).on('error', (e) => {
              res.status(500)
              console.log(e)
              res.end()
          })
    }
    
    return Polly
    
}