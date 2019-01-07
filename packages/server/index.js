import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   res.send({ hi: 'HelloWorld' });
});


/*mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
   .then(() => console.log('MongoDB database connected..'))
   .catch(err =>
      console.log(`Errors occur when tried to connect the database: ${err}`));
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`🚀 Server ready at ${PORT}`);
});

