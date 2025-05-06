<p align="center">
  <a href="https://brightdata.com/">
    <img src="https://mintlify.s3.us-west-1.amazonaws.com/brightdata/logo/light.svg" width="300" alt="Bright Data Logo">
  </a>
</p>

<h1 align="center">Bright Data MCP</h1>
<h3 align="center">Enhance AI Agents with Real-Time Web Data</h3>

<div align="center">
  
[![smithery badge](https://smithery.ai/badge/@luminati-io/brightdata-mcp)](https://smithery.ai/server/@luminati-io/brightdata-mcp) 
<a href="https://glama.ai/mcp/servers/@luminati-io/brightdata-mcp">
  <img width="200" src="https://glama.ai/mcp/servers/@luminati-io/brightdata-mcp/badge" alt="Bright Data MCP server" />
</a>

</div>

## 🌟 Overview

Welcome to the official Bright Data Model Context Protocol (MCP) server, enabling LLMs, agents and apps to access, discover and extract web data in real-time. This server allows MCP clients, such as Claude Desktop, Cursor, Windsurf and others, to seamlessly search the web, navigate websites, take action and retrieve data - without getting blocked.

![MCP](https://github.com/user-attachments/assets/4ed89458-ae52-4421-a255-4147e34d7603)

## ✨ Features

- **Real-time Web Access**: Access up-to-date information directly from the web
- **Bypass Geo-restrictions**: Access content regardless of location constraints
- **Web Unlocker**: Navigate websites with bot detection protection
- **Browser Control**: Optional remote browser automation capabilities
- **Seamless Integration**: Works with all MCP-compatible AI assistants

## 🔧 Available Tools



|Feature|Description|
|---|---|
|search_engine|Scrape search results from Google, Bing or Yandex. Returns SERP results in markdown (URL, title, description)|
|scrape_as_markdown|Scrape a single webpage URL with advanced options for content extraction and get back the results in MarkDown language. This tool can unlock any webpage even if it uses bot detection or CAPTCHA.|
|scrape_as_html|Scrape a single webpage URL with advanced options for content extraction and get back the results in HTML. This tool can unlock any webpage even if it uses bot detection or CAPTCHA.|
|session_stats|Tell the user about the tool usage during this session|
|web_data_amazon_product|Quickly read structured amazon product data. Requires a valid product URL with /dp/ in it. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_amazon_product_reviews|Quickly read structured amazon product review data. Requires a valid product URL with /dp/ in it. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_linkedin_person_profile|Quickly read structured linkedin people profile data. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_linkedin_company_profile|Quickly read structured linkedin company profile data. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_zoominfo_company_profile|Quickly read structured ZoomInfo company profile data. Requires a valid ZoomInfo company URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_instagram_profiles|Quickly read structured Instagram profile data. Requires a valid Instagram URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_instagram_posts|Quickly read structured Instagram post data. Requires a valid Instagram URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_instagram_reels|Quickly read structured Instagram reel data. Requires a valid Instagram URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_instagram_comments|Quickly read structured Instagram comments data. Requires a valid Instagram URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_facebook_posts|Quickly read structured Facebook post data. Requires a valid Facebook post URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_facebook_marketplace_listings|Quickly read structured Facebook marketplace listing data. Requires a valid Facebook marketplace listing URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_facebook_company_reviews|Quickly read structured Facebook company reviews data. Requires a valid Facebook company URL and number of reviews. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_x_posts|Quickly read structured X post data. Requires a valid X post URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_zillow_properties_listing|Quickly read structured zillow properties listing data. Requires a valid zillow properties listing URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_booking_hotel_listings|Quickly read structured booking hotel listings data. Requires a valid booking hotel listing URL. This can be a cache lookup, so it can be more reliable than scraping|
|web_data_youtube_videos|Quickly read structured YouTube videos data. Requires a valid YouTube video URL. This can be a cache lookup, so it can be more reliable than scraping|
|scraping_browser_navigate|Navigate a scraping browser session to a new URL|
|scraping_browser_go_back|Go back to the previous page|
|scraping_browser_go_forward|Go forward to the next page|
|scraping_browser_click|Click on an element. Avoid calling this unless you know the element selector (you can use other tools to find those)|
|scraping_browser_links|Get all links on the current page, text and selectors. It's strongly recommended that you call the links tool to check that your click target is valid|
|scraping_browser_type|Type text into an element|
|scraping_browser_wait_for|Wait for an element to be visible on the page|
|scraping_browser_screenshot|Take a screenshot of the current page|
|scraping_browser_get_html|Get the HTML content of the current page. Avoid using the full_page option unless it is important to see things like script tags since this can be large|
|scraping_browser_get_text|Get the text content of the current page|



## 🚀 Quickstart with Claude Desktop

1. Install `nodejs` to get the `npx` command (node.js module runner). Installation instructions can be found on the [node.js website](https://nodejs.org/en/download)

2. Go to Claude > Settings > Developer > Edit Config > claude_desktop_config.json to include the following:

```json
{
  "mcpServers": {
    "Bright Data": {
      "command": "npx",
      "args": ["@brightdata/mcp"],
      "env": {
        "API_TOKEN": "<insert-your-api-token-here>",
        "WEB_UNLOCKER_ZONE": "<optional if you want to override the default mcp_unlocker zone name>",
        "BROWSER_AUTH": "<optional if you want to enable remote browser control tools>"
      }
    }
  }
}
```

## 🔧 Account Setup

1. Make sure you have an account on [brightdata.com](https://brightdata.com) (new users get free credit for testing, and pay as you go options are available)

2. Get your API key from the [user settings page](https://brightdata.com/cp/setting/users)

3. Create a Web Unlocker proxy zone called `mcp_unlocker` in your [control panel](https://brightdata.com/cp/zones)
   - You can override this zone in your MCP server with the env variable `WEB_UNLOCKER_ZONE`

4. (Optional) To enable browser control tools:
   - Visit your Bright Data control panel at [brightdata.com/cp/zones](https://brightdata.com/cp/zones)
   - Create a new 'Browser API' zone
   - Once created, copy the authentication string from the Browser API overview tab
   - The authentication string will be formatted like: `brd-customer-[your-customer-ID]-zone-[your-zone-ID]:[your-password]`

![Browser API Setup](https://github.com/user-attachments/assets/cb494aa8-d84d-4bb4-a509-8afb96872afe)

## 🔌 Other MCP Clients

To use this MCP server with other agent types, you should adapt the following to your specific software:

- The full command to run the MCP server is `npx @brightdata/mcp`
- The environment variable `API_TOKEN=<your-token>` must exist when running the server

## 💡 Usage Examples

Some example queries that this MCP server will be able to help with:

- "Google some movies that are releasing soon in [your area]"
- "What's Tesla's current market cap?"
- "What's the Wikipedia article of the day?"
- "What's the 7-day weather forecast in [your location]?"
- "Of the 3 highest paid tech CEOs, how long have their careers been?"

## 🎬 Demo

The videos below demonstrate a minimal use case for Claude Desktop:

![Demo](assets/Demo3.gif)
![Demo](assets/Demo.gif)

## ⚠️ Troubleshooting

### Timeouts when using certain tools

Some tools can involve reading web data, and the amount of time needed to load the page can vary by quite a lot in extreme circumstances.

To ensure that your agent will be able to consume the data, set a high enough timeout in your agent settings.

A value of `180s` should be enough for 99% of requests, but some sites load slower than others, so tune this to your needs.

## 👨‍💻 Contributing

We welcome contributions to help improve the Bright Data MCP! Here's how you can help:

1. **Report Issues**: If you encounter any bugs or have feature requests, please open an issue on our GitHub repository.
2. **Submit Pull Requests**: Feel free to fork the repository and submit pull requests with enhancements or bug fixes.
3. **Coding Style**: All JavaScript code should follow [Bright Data's JavaScript coding conventions](https://brightdata.com/dna/js_code). This ensures consistency across the codebase.
4. **Documentation**: Improvements to documentation, including this README, are always appreciated.
5. **Examples**: Share your use cases by contributing examples to help other users.

For major changes, please open an issue first to discuss your proposed changes. This ensures your time is well spent and aligned with project goals.

## 📞 Support

If you encounter any issues or have questions, please reach out to the Bright Data support team or open an issue in the repository.
