var https = require('https')

module.exports = function(apiToken) {

    Polly = {}
    
    Polly.settings = {
        host: 'api.polly.help',
        version: 'api/v1',
        'polly-api-token' : apiToken
    },
    
    Polly.publication = {
        
        get (params,callback) {
            Polly.makeRequest(`/publication/${params.publicationId}`,callback)
        },
        
        search (params,callback) {
            Polly.makeRequest(`/publication/${params.publicationId}/search/${params.searchQuery}`, callback)
        },
        
        mostpopular (params,callback) {
            Polly.makeRequest(`/publication/${params.publicationId}/mostpopular/${params.amount}`, callback)
        }

    },
    
    Polly.collection = {
        
        get (params,callback) {
            Polly.makeRequest(`/publication/${params.publicationId}/collection/${params.collectionId}`, callback)
        }
    },
    
    Polly.article = {
        
        get (params,callback) {
            Polly.makeRequest(`/publication/${params.publicationId}/article/${params.articleId}`, callback)
        }
    },
    
    Polly.decision_tree = {
        
        get (params,callback) {
            Polly.makeRequest(`/decisiontree/${params.dtId}`, callback)
        },
        
        answer (params,callback) {
            Polly.makeRequest(`/decisiontree/${params.dtId}/answer/${params.questionId}/${params.answerId}`, callback)
        }
    },
    
    Polly.makeRequest = function (url,callback) {
        
        var options = {
            host: Polly.settings.host,
            path: `/${Polly.settings.version}${url}`,
            headers: {
              'polly-api-token': Polly.settings['polly-api-token']
            }
          };
          
          var req = https.get(options, (response) => {

            response.setEncoding('utf8');
            
            var data = ''
          
            response.on('data', (d) => {
                data += d
            });
            
            response.on('end', ()=> {
                callback(data)
            })

          })
    }
    
    return Polly
    
}