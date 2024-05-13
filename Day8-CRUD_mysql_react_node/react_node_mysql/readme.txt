1.create database(productmaster) and table(product) with data in it
2.initialize project folder(indside product-server) -> npm init -y
3.indside product-server -> run -> npm i express nodemon cors mysql2
4.create server.js (create get,post,patch/update,delete) methods
    run server -> \react_node_mysql\product-server> nodemon server.js
5.in package.json -> change  -> main": "index.js" to main": "server.js" also add     
                                "scripts": {  "start":"nodemon server.js", }
6.run server -> react_node_mysql\product-server> nodemon server.js
7.create frontend -> react_node_mysql\product-web> npm run dev
8.