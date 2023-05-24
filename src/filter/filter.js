    module.exports.authenticate = function(req, res, next) {
        console.log('[authenticating logic]')
        // console.log(req.headers.authorization)
        
          var headerExists = req.headers.authorization;

          console.log("[header check success]");
        
          // if (headerExists) {
          //   var token = req.headers.authorization.split(' ')[1]; //--> Authorization Bearer xxx
          //   jwt.verify(token, 'passwordgoeshere', function(error, decoded) {
          //     if (error) {
          //       console.log(error);
          //       res.status(401).json('Unauthorized');
          //     } else {
          //       req.user = decoded.username;
          //       var authenticated = true;
          //       next();
          //     }
          //   });
          // } else {
          //   res.status(403).json('No token provided');
          // }
        };