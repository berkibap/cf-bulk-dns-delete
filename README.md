# CF Bulk DNS Delete

I needed this quick script because my domain registrar had 200+ default DNS' which I didn't need. I was too lazy to delete all them manually.

# Usage

Open a terminal in your desired folder and run
```console
git clone https://github.com/berkibap/cf-bulk-dns-delete
```
After that, run 
```console
cd cf-bulk-dns-delete && npm i
```
Copy `config.json.example` > `config.json` and put your API Token ([create here](https://dash.cloudflare.com/profile/api-tokens)) and your Zone ID (can be found on your     website's overview page)
```json
{
    "zoneId": "",
    "token": ""
}
```

After you're done, run `npm start` and it will automatically delete all the DNS records.