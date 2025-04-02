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
    let tmpEventTemplate2 = {
        start: '4/1/2025',
        end: '4/2/2025',
        title: 'April Fools',
        description: 'JK lol',
        location: 'Where you least expect'
    }
    let tmpEventTemplate3 = {
        start: '4/29/2025',
        end: '4/28/2025',
        title: 'Example Event',
        description: 'Test Information - Description',
        location: 'Example Location'
    }
    let tmpEventsArray = [tmpEventTemplate, tmpEventTemplate2, tmpEventTemplate3]
    return NextResponse.json({array: tmpEventsArray, status: 0})
}