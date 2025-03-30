import { NextResponse, NextRequest } from 'next/server'

const searchDict = {
  "home": '/',
  "about": '/about',
  "events": '/events',
  "contact": '/contact',
  "sponsors": '/sponsors',
  "volunteer": '/volunteer',
  "media": '/media',
}

export async function POST(request){

  let data = await request.json()
  const { term } = data;
  let searchTerm = term.toLowerCase().trim()

  const searchDictTerms = Object.keys(searchDict);

  let outArray = []

  let exampleSearchResult = {
    link: '/about',
    match: 'about',
    term: 'a'
  }

  searchDictTerms.forEach((key) => {
    if(key.includes(searchTerm)){
    
      let tmpObj = {link: searchDict[`${key}`], match: `${key}`}
      outArray.push(tmpObj)

    }
  })

  // let outValue = searchDict[`${outKey}`]

  if(outArray.length > 0){
    return NextResponse.json({array: outArray, term: term, status: 0})
  }else{
    return NextResponse.json({array: [], term: term, status: 1})
  }

  
  // research elasti search
  // create a sitemap
  // create a regex filter for mispellings?

}