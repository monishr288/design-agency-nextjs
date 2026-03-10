import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you can integrate with EmailJS, SendGrid, or any email service
    // For now, we'll just log and return success
    
    console.log('Contact form submission:', { name, email, message })

    // You can integrate with EmailJS API here
    // const response = await emailjs.send(...)

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}