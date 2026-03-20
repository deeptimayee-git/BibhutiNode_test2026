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
                overflow: hidden;
                color: white;
            }

            /* Video Background */
            video {
                position: fixed;
                right: 0;
                bottom: 0;
                min-width: 100%;
                min-height: 100%;
                z-index: -1;
                object-fit: cover;
            }

            /* Overlay */
            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
            }

            /* Content */
            .content {
                position: relative;
                text-align: center;
                top: 40%;
                transform: translateY(-40%);
            }

            h1 {
                font-size: 50px;
                letter-spacing: 3px;
            }

            p {
                font-size: 22px;
                margin-top: 10px;
            }

            .btn {
                margin-top: 30px;
                padding: 15px 30px;
                font-size: 18px;
                border: none;
                border-radius: 5px;
                background: #ff9800;
                color: white;
                cursor: pointer;
            }

            .btn:hover {
                background: #e68900;
            }
        </style>
    </head>

    <body>

        <!-- Video Background -->
        <video autoplay muted loop>
            <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4">
        </video>

        <div class="overlay"></div>

        <!-- Content -->
        <div class="content">
            <h1>🏬 BIKI SPORTS AND FOOT WEAR</h1>
            <p>👟 Power Your Game • Style Your Walk ⚽</p>
            <button class="btn">Explore Now 🛒</button>
        </div>

    </body>
    </html>
    `);
});




app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


