import app from './src/app.js'
import {connectDB} from './src/db.js'

connectDB();
app.listen(4000,()=>{console.log('listening on por port:4000');});