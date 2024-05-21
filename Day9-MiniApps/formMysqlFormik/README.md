1.create database(userdataformik) and table(users) with data in it
2.initialize project folder(indside Server) -> npm init -y
3.indside Server -> run -> npm i express nodemon cors mysql2
4.create server.js (create get,post,patch/update,delete) methods
    run server -> \react_node_mysql\product-server> nodemon server.js
5.in server/package.json -> change  -> main": "index.js" to main": "server.js" also add below code inside scripts    
                "start":"nodemon server.js",
6.run server -> react_node_mysql\product-server> nodemon server.js
7.create frontend -> react_node_mysql\product-web> npm run dev