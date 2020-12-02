import React from 'react'
import {
  MyFooter,
  H6,
  A,
  Ul1,
  Li1,
  P,
  Ul2,
  Li2,
  A1,
  Hr,
  A2,
  A3,
  A4,
  Div1,
  Div2,
  Div3,
  P1,
  Div4,
  Div5,
  Div6,
  Div21,
  Div22,
  Div11
} from './style'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t] = useTranslation()
  return (
    <MyFooter>
      <Div1>
        <Div11>
          <Div3>
            <H6>{t('apropos')}</H6>
            <P1>{t('textapropos')}</P1>
          </Div3>

          <Div4>
            <H6>{t('categories')}</H6>
            <Ul1>
              <Li1>
                <A href=''>C</A>
              </Li1>
              <Li1>
                <A href=''>UI Design</A>
              </Li1>
              <Li1>
                <A href=''>PHP</A>
              </Li1>
              <Li1>
                <A href=''>Java</A>
              </Li1>
              <Li1>
                <A href=''>Android</A>
              </Li1>
              <Li1>
                <A href=''>Templates</A>
              </Li1>
            </Ul1>
          </Div4>

          <Div5>
            <H6>{t('lienrapides')}</H6>
            <Ul1>
              <Li1>
                <A href=''>About Us</A>
              </Li1>
              <Li1>
                <A href=''>Contact Us</A>
              </Li1>
              <Li1>
                <A href=''>Contribute</A>
              </Li1>
              <Li1>
                <A href=''>Privacy Policy</A>
              </Li1>
              <Li1>
                <A href=''>Sitemap</A>
              </Li1>
            </Ul1>
          </Div5>
        </Div11>
        <Hr />
      </Div1>

      <Div6>
        <Div2>
          <Div21>
            <P>Copyright &copy; 2017 All Rights Reserved.</P>
          </Div21>

          <Div22>
            <Ul2>
              <Li2>
                <A1 className='facebook' href='#'>
                  <i className='fa fa-facebook'></i>
                </A1>
              </Li2>
              <Li2>
                <A2 className='twitter' href='#'>
                  <i className='fa fa-twitter'></i>
                </A2>
              </Li2>
              <Li2>
                <A3 className='dribbble' href='#'>
                  <i className='fa fa-dribbble'></i>
                </A3>
              </Li2>
              <Li2>
                <A4 className='linkedin' href='#'>
                  <i className='fa fa-linkedin'></i>
                </A4>
              </Li2>
            </Ul2>
          </Div22>
        </Div2>
      </Div6>
    </MyFooter>
  )
}

export default Footer
