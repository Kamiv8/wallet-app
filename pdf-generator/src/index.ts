import dotenv from "dotenv";
import express from 'express';
import monthReport from './component/templates/monthReport.template';

const dotenvConfigOutput = dotenv.config();

const app = express();

app.use(express.json());

const port = +dotenvConfigOutput.parsed.PORT;
app.listen(port, () => {
    console.log(`The sample PDF app is running on port ${port}.`);
})

app.post('/api/month', async (req, res) => {
    const result = await monthReport();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=export.pdf`);
    result.pipe(res);
})

