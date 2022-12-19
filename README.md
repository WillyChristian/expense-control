## Propouse / Motivation

It's been a while since I've had some difficulty to control my spendings, so I decide to create this project to helps me to deal with it.

### How it works

It's pretty straight foward and quite simple. First, I copied a financial expense control spreadsheet from the internet and pasted it on a new google spreadsheet. Then, with a google developer account (it's not a special account... just a name), I went to the [dashboard](https://console.cloud.google.com/apis/dashboard), created a new app and gave to it a license to the Gooogle Spreadsheet API. With this, I can use an app (can be mobile or web) to menage my sheets and add/remove data from it right on my phone

### What I using

I decide to use [Next.JS](https://nextjs.org/), just because it makes easy to create on the same app the front end and the API/Backend. With Next, [React](https://reactjs.org/) cames as default and I choose [Styled Components](https://styled-components.com/) beacause it's handy to wrote the SASS-like CSS and use JS in styles.

For the next steps, I decide to add some animations on mobile despite the fact that my form is not that big. However, it will helps to handle situations with less screen. So then, I'm planning to use [GSAP](https://greensock.com/gsap/), which I have experiensed before and it's an awesome library.

### Deploy on Vercel

I will deploy the app soon. Actually, just the sidebar and the form has some content builded, so... when more content were added, I will use [Vercel](https://vercel.com/) to hold the application. And... I also have to build some access control first.

Last update (dec-19-2022):
I'm working on the UI. I'm not so good when it comes create designs, so I'm getting some inspirations on [Dribbble](https://dribbble.com/). 
![Captura de Tela 2022-12-19 às 00 01 05](https://user-images.githubusercontent.com/39393671/208339181-0306d682-9847-4885-9abd-2391ebe9a819.png)
