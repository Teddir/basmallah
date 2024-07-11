import fsPromises from 'fs/promises';
import path from 'path'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const hadist = await fsPromises.readFile(process.cwd() + `/app/lib/json/hadist/${id}.json`, 'utf8') || []
       
    return Response.json({ hadist})
  }