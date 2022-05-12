screpts
{
"start": "npx nodemon src/index.ts"
"build": "npx tsc"
"jasmine": "jasmine"
"test": "npm run build && npm run jasmine"
}
//-----
i used ( get('/resize/:name/:width/:height'),get('/')) endpoints to test my code
//-----
the functionality :
to resize image put ( images/resize/photoname/width/height ) 
to viwe the original put ( images/photoname )
it support cashing so if the user wanted the photo with the same height and width
it will not be processed agin 


