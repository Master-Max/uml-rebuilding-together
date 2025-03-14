import { NextResponse, NextRequest } from 'next/server'

export async function POST(request){

    let data = await request.json()
    const { start, end } = data;
    console.log(data)
    let tmpEventTemplate = {
        start: '3/15/2025',
        end: '3/16/2025',
        title: 'Ides of March',
        description: 'Oh the times they are a changing',
        location: 'Zoom Call'
    }
    let tmpEventsArray = [tmpEventTemplate]
    return NextResponse.json({array: tmpEventsArray, status: 0})
}