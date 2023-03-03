export default function headers(token: string | undefined, file?: File): object {
    if (file) {
        const headers = { authorization: `Bearer ${token}`, 'Content-Type': 'multpart/form-data' } 
      return {headers}  
    }
    const headers = { authorization: `Bearer ${token}` }

    return { headers }
}