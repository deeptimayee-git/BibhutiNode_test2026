import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send(`
    <html>
    <head>
        <title>BIKI SPORTS AND FOOT WEAR</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #1f4037, #99f2c8);
                color: #fff;
                text-align: center;
            }
            .header {
                padding: 20px;
                background: #000;
                font-size: 28px;
                font-weight: bold;
                letter-spacing: 2px;
            }
            .container {
                margin-top: 80px;
            }
            h1 {
                font-size: 50px;
                margin-bottom: 10px;
            }
            p {
                font-size: 20px;
                margin-bottom: 30px;
            }
            .features {
                font-size: 22px;
                margin-top: 20px;
                line-height: 1.8;
            }
            .btn {
                margin-top: 40px;
                padding: 15px 30px;
                font-size: 18px;
                border: none;
                border-radius: 6px;
                background: #ff9800;
                color: #fff;
                cursor: pointer;
            }
            .btn:hover {
                background: #e68900;
            }
            .footer {
                margin-top: 100px;
                padding: 15px;
                background: #000;
                font-size: 14px;
            }
        </style>
    </head>

    <body>

        <div class="header">
            🏬 BIKI SPORTS AND FOOT WEAR
        </div>

        <div class="container">
            <h1>👟 Welcome to BIKI Store ⚽</h1>
            <p>Your one-stop destination for Sports & Footwear 🏃‍♂️</p>

            <div class="features">
                🏏 Sports Equipment<br>
                👟 Branded Footwear<br>
                🎽 Active Wear<br>
                💯 Best Quality & Affordable Price
            </div>

            <button class="btn">Shop Now 🛒</button>
        </div>

        <div class="footer">
            © 2026 BIKI SPORTS AND FOOT WEAR | Built with ❤️
        </div>

    </body>
    </html>
    `);
});




app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


