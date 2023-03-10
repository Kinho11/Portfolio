import { SectionHeader } from './Header.styled'
import CV from "../../assets/CV.pdf"
import foto from "../../assets/foto.jpg"
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai"
import { useEffect } from 'react'

export const Header = () => {


  const animacao = () => {
    const texto = document.getElementById("texto")
    const nome = document.getElementById("nome")
    const subtitulo = document.getElementById("subtitulo")

    const textoAnimacao = texto.innerText.split("")
    const nomeAnimacao = nome.innerText.split("")
    const subtituloAnimacao = subtitulo.innerText.split("")
    texto.innerHTML = ""
    nome.innerHTML= ""
    subtitulo.innerHTML = ""

    textoAnimacao.forEach((letra,i) => {
      setTimeout(()=>{
        texto.innerHTML += letra
      }, 80 * i)
    })
    
    setTimeout(()=>{
      nomeAnimacao.forEach((letra,i) => {
        setTimeout(()=>{
          nome.innerHTML += letra
        }, 80 * i)
  
      })
    },1200)

    setTimeout(()=>{
      subtituloAnimacao.forEach((letra,i) => {
        setTimeout(()=>{
          subtitulo.innerHTML += letra
        }, 80 * i)
  
      })
    },2900)
  
    
    
  }
  
  useEffect(()=>{
    animacao()
  },[])


  return (
    <>
      <SectionHeader>

        <div className='titulo'>
  
          <div>
            
            <div className='texto'>
              <h1 id='texto'  className='animacaoTexto'>Olá, me chamo</h1>
            </div>

            <div className='nome'>
              <h1 id='nome' className='animacaoNome'>Marcus Paulo Moreno</h1>
            </div>

            <div className='subtitulo'>
              <h1 id='subtitulo' className='animacaoSubtitulo'>Desenvolvedor de software front-end</h1>
            </div>

          </div>

        </div>

          <div className='links' data-aos = "fade-right" >
            <a className='botao' href={CV} target="_blank">Currículo</a>
            <a  className='botao' href="https://api.whatsapp.com/send?phone=+5571982732802&text=Olá, gostei bastante do seu portfólio!!" target="_blank" rel="noopener noreferrer">Vamos conversar!</a>
          </div>

        <div className='container-social' data-aos = "fade-right" >
          <a className='icone-social'href="https://www.linkedin.com/in/marcus-paulo-moreno/" target="_blank" ><AiFillLinkedin/></a>
          <a className='icone-social' href="https://github.com/Kinho11" target="_blank"><AiFillGithub/></a>
        </div>

        <div className='scroll'>
          <a href='#contact' data-aos = "fade-right">
            Scroll down
          </a>
        </div>

         <img className='foto' src={foto} alt=""  data-aos = "fade-right" />  

      </SectionHeader>
    
    </>
  )
}
