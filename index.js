const express=require("express")
const cors = require("cors")


const app=new express();

const usermodel= require("./model/Login");
const Registermodel= require("./model/Register");



app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

app.post('/login', async (request, response) => {
    const { email, password } = request.body;
  
    try {
      const user = await usermodel.findOne({ email, password });
  
      if (user) {
        response.json({ success: true, message: 'Login successful' });
      }
       else {
        response.json({ success: false, message: 'Invalid Password' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during login' });
    }
  });

  app.post('/login',async(request,response)=>{
    var data = await usermodel.find();
    response.send(data)
})


app.post('/register', async (request, response) => {
    try {
      const { username, email, password } = req.body;
  
      // Basic validation
      if (!username || !email || !password) {
        return response.status(400).json({ message: 'All fields are required' });
      }
  
      // Check if the email already exists
      const existingUser = await Registermodel.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ message: 'Email already registered' });
      }
      // Create a new user
    const newUser = new Registermodel({ username, email, password });
    await newUser.save();

    response.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});




app.listen(4005,(request,response)=>{
    console.log("Port is running in 4005")
})