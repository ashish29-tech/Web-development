
//Server har wo chiz hai jo hame response provide karti hai...
//so hamne apne laptop ko is tarike se configure kiya hai ki uski help se response bhej pa rahe hai...


//Today's class is Important for Interview
//What is DB ?
//Collection of Information(Data which is useful for me).
//What is Data ? Collection of properties...(Everything is Data). 
// Suppose I'm in shimla and I want to go to Delhi but there are 3 trains at Railway station. So data of of Delhi is useful for me but rest of the train's data are of no use for me. So Delhi's train data is Indormation(Data which is useful for me).
// While learning Nodejs we learnt...why we use file system ? Ans: In order to store data and perform CRUD on it.
//Why are we actually studying DB when we had file system ? Data Redundancy
//DR is the mother of all the problems. All small problems are arise from it.
//DR is called data inconsistency where all the problems like security, duplicacy, incoorectness, storing the same value in two different DB all these things happpening bcoz of data inconsistency which is called DR.
//Types of DB: 2 types
//SQL and NOSQL
//Those DBs are called SQL DB which uses SQL in order to perform some task. Eg: MySQL, PostgreSQL

//Those DB which don't use SQL DB are NoSQL DB... eg: MongoDB, DynamoDB

//DBMS. How many types of DBMS ? RDBMS, NRDBMS
//DBMS: Software to interact with our DB.

//RDBMS: Tables are created
//NRDBMS: Object format m data store. No table is created here.

//Which DB to select ?
//There is a criteria to select DB. Ek theorem hoti hai. CAP.
//C: Consistency, A: Availability, P: Partition Tolerance. On the basis of this theorem we decide which DB to follow.
//Consistency: For consistent system like banking system. We use SQL. Data m bhale hi 5,6 second jyada lag jaye...means time constraint nahi hai..but data as it is match honi chahiye toh we can say DB consistent hai. And when we want to build consistent app then we would use SQL DB.
//Availability: Jaise data mangu waise hi available...instant avilable. Prefer NOSQL for availaibility.
//Partition Tolerance: Ek DB m change ho to uske corrresponding baki DB m bhi ho jaye no matter how far they are...taki dono m barabar ho jaye. Ex: I phone 17 pro sale at rs. 70,000...in India DB, UAE DB, USA DB


//-------------------------------------------------------------------------------------------------------------------
//MongoDB
//When we make application. We have two types of architecture(Banane ka tarika). (1). Monolithic...1 server and 1 db (2). Microservice...har feature ke liye 1 server and 1 db...maybe 2 feature ke liye same db ho.
//What is MongoDB, Why MongoDB ?
//MongoDB is a NOSQL DB...we can use it with node and express.


//----------------------------------------------------------
//open mosgosh(mongoshell) in local system.....

//mongosh is a command-line MongoDB shell, while MongoDB Compass is a GUI tool for visual interaction with MongoDB.
//Which one should YOU use? 👉 Learning phase → MongoDB Compass......👉 Real development → mongosh......👉 Best practice → Dono use karo 💯


//mongod --version to check mongoDB 
// mongosh
//test with 1 + 1, 'ash'.toUpperCase
//This is REPL for us.
//In mongoshell we can work with databases.
//When we need to see lots of DBs we write/command... "show databases". We'll see 2-3 dbs.
//If we want to use the already existing DB...for that command...."use ____"(db name). Ex:use admin...now we are standing at cheers wale DB pe.
//Now dekhna hai is DB m kya-kya hai...for that...command..."show collections"
//Command..."db"...ye btayega kis db pe khade hai.
//Khud ki nai collections bnani hai toh...command: db.createCollection('goa')...1 collection bna dega...goa. Check karne ke liye command: show collections
//koi purana db use karna hai toh..."use dbname" and galti se kuch aur likh diya...if that dbname ka db pehle se available nai karta hoga toh wo create ho jayega
//exit ke liye... ctrl + c. Isme peeche nai jana hota...seedha bhr ate hai.
//Ex: mongosh -> use webdevelopment(new create karne ke liye..and agr ye pehle se hota to uspe kaam karwa rha hota...and available nai hota toh create kar deta. -> show dbs..but isme webdevelopment nai dikhega cuz ye sirf wai db dikhati hai jisme min. 1 collection ho. -> db.createCollection('frontend')....new collection bnane ke liye..collection -> show dbs...ab dikh jayega webdevelopment naam ka db.
//use se db create ho gya and db ke andar collection create karni thi isliye..db.createCollection('__').
//Remove collection. Suppose by mistake backend collection bna diya...toh htane ke liye...->db.backend.drop()...means db.collectionname.drop()
// uparrow(^) and down(arrow)...se previous command aa jati hai.
//to delete db....db.dropDatabase(). DON'T USE IT IN COMPANY EVER.


//commands:
//show databases or show dbs
//use (db name) like... use gian...ispe kaam karne ke liye
//show colllections
//to create collection...us db m jayenge and waha likhenge... db.createCollection('goa')
//check karna whether bna ki nai bna collection... show collections
//jo pehle se nai hoga and use... use kare toh wo create ho jayega... ex: use ashish...toh ashish name ki db create ho jayegi
//to delete collection... us db pe jana hai and run.... db.frontend.drop()....true aa jayega
//DON"T USE...EVEN IF USING...LOOK CAREFULLY... TO DELETE: us db pe rehna and run... db.dropDatabase()

















