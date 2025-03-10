import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.NEXT_SENDFROM_EMAIL_USERNAME;
    const password = process.env.NEXT_SENDFROM_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_SENDTO_EMAIL;


    console.log("dealing with req")
    // console.log(request.body)

    let data = await request.json()
    let contactDetails = data.contactDetails;

    console.log(data)

    // res.status(200).json({message: 'hi'})

    // return;
    // return new Response({data: request})

    // const formData = await request.body
    const name = contactDetails.name
    const email = contactDetails.email
    const company = contactDetails.company
    const phone = contactDetails.phone
    const message = contactDetails.message


    // create transporter object
    const transporter = nodemailer.createTransport({
        service:"Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Company: ${company} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent", status: 0 })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", status: 1 })
    }


}