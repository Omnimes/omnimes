import Image from 'next/image'
import { SubtitleNormal } from './atoms/Subtitle'
import { Heading } from './atoms/Heading'
import { useTranslations } from 'next-intl'

export const Cooperation = () => {
  const t = useTranslations('Cooperation')

  return (
    <>
      <div className="mx-auto max-w-screen-xl py-8 md:text-center lg:py-16">
        <SubtitleNormal text={t('subtitle')} />
        <Heading text={t('title')} />
        <div className="mt-8 flex flex-row flex-wrap justify-center gap-8 cursor-default">
          <a href="#" className="flex items-center justify-center">
            <Image
              src={'/images/company/saz.png'}
              alt={'logo saz'}
              className="z-1 max-h-[100px] brightness-0 dark:brightness-100"
              width={500}
              height={500}
            />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Image
              src={'/images/company/eldrew.png'}
              alt={'logo eldrew'}
              className="z-1 max-h-[100px] dark:brightness-0 dark:grayscale-0 dark:invert"
              width={500}
              height={500}
            />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Image
              src={'/images/company/tartak.png'}
              alt={'logo tartak'}
              className="z-1 max-h-[100px] dark:brightness-0 dark:grayscale-0 dark:invert"
              width={500}
              height={500}
            />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Image
              src={'/images/company/triwall.png'}
              alt={'logo triwall'}
              className="z-1 max-h-[100px] dark:brightness-0 dark:grayscale-0 dark:invert"
              width={500}
              height={500}
            />
          </a>
          {/* <a href="#" className="flex items-center justify-center">
            <svg
              className="h-6 hover:text-gray-900 dark:hover:text-white"
              viewBox="0 0 124 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.813 0.069519L12.5605 11.1781L8.28275 0.069519H0.96875V20.2025H6.23233V6.89245L11.4008 20.2025H13.7233L18.8634 6.89245V20.2025H24.127V0.069519H16.813Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.8015 16.461V15.1601C34.3138 14.4663 33.2105 14.1334 32.1756 14.1334C30.9504 14.1334 29.8174 14.679 29.8174 15.8245C29.8174 16.9699 30.9504 17.5155 32.1756 17.5155C33.2105 17.5155 34.3138 17.1533 34.8015 16.4595V16.461ZM34.8015 20.201V18.7519C33.8841 19.8358 32.1117 20.5633 30.213 20.5633C27.9484 20.5633 25.1367 19.0218 25.1367 15.7614C25.1367 12.2326 27.9469 11.0578 30.213 11.0578C32.1756 11.0578 33.9183 11.6885 34.8015 12.7767V11.3277C34.8015 10.0605 33.7042 9.18487 31.8039 9.18487C30.3349 9.18487 28.8658 9.75687 27.6748 10.7542L25.9322 7.52314C27.831 5.92447 30.3691 5.26007 32.6291 5.26007C36.1783 5.26007 39.5179 6.561 39.5179 11.0871V20.2025H34.8015V20.201Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.1562 18.3002L42.1145 14.9826C43.2178 15.9447 45.57 16.9421 47.3186 16.9421C48.7237 16.9421 49.3051 16.5461 49.3051 15.9154C49.3051 14.1055 40.7094 15.9741 40.7094 10.0605C40.7094 7.4938 42.9739 5.26007 47.0391 5.26007C49.5489 5.26007 51.6276 6.04474 53.22 7.1902L51.4194 10.4858C50.5303 9.6366 48.8471 8.88127 47.0747 8.88127C45.9715 8.88127 45.2384 9.30514 45.2384 9.8786C45.2384 11.4773 53.7999 9.81994 53.7999 15.7966C53.7999 18.5686 51.3257 20.5633 47.103 20.5633C44.4429 20.5633 41.7205 19.6862 40.1562 18.3002Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64.7231 20.2025V11.7149C64.7231 9.94019 63.7759 9.36672 62.2712 9.36672C60.8958 9.36672 59.9784 10.1177 59.4313 10.7821V20.201H54.7148V0.069519H59.4313V7.40285C60.3145 6.37619 62.063 5.26152 64.5372 5.26152C67.9065 5.26152 69.4335 7.13299 69.4335 9.81992V20.2025H64.7231Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M80.0535 16.461V15.1601C79.5643 14.4663 78.4626 14.1334 77.4217 14.1334C76.1965 14.1334 75.0635 14.679 75.0635 15.8245C75.0635 16.9699 76.1965 17.5155 77.4217 17.5155C78.4626 17.5155 79.5643 17.1533 80.0535 16.4595V16.461ZM80.0535 20.201V18.7519C79.1346 19.8358 77.3578 20.5633 75.465 20.5633C73.199 20.5633 70.3828 19.0218 70.3828 15.7614C70.3828 12.2326 73.199 11.0578 75.465 11.0578C77.4217 11.0578 79.1644 11.6885 80.0535 12.7767V11.3277C80.0535 10.0605 78.9488 9.18487 77.056 9.18487C75.5869 9.18487 74.1164 9.75687 72.9209 10.7542L71.1783 7.52314C73.0771 5.92447 75.6152 5.26007 77.8812 5.26007C81.4289 5.26007 84.7625 6.561 84.7625 11.0871V20.2025H80.0535V20.201Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M93.8157 16.461C95.6802 16.461 97.0913 15.097 97.0913 12.897C97.0913 10.7263 95.6802 9.36232 93.8157 9.36232C92.8046 9.36232 91.5854 9.90645 90.9995 10.6911V15.1601C91.5854 15.9447 92.8061 16.461 93.8157 16.461ZM86.2891 20.201V0.069519H90.9995V7.34419C92.0485 6.01247 93.6688 5.2418 95.3784 5.26152C99.0778 5.26152 101.895 8.13032 101.895 12.897C101.895 17.847 99.0198 20.5633 95.3784 20.5633C93.7235 20.5633 92.2247 19.8989 90.9995 18.5114V20.2025H86.2891V20.201Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M102.844 0.069519H107.554V20.2025H102.844V0.069519Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116.336 9.00154C114.284 9.00154 113.49 10.2101 113.303 11.2646H119.396C119.27 10.2379 118.508 9.00154 116.336 9.00154ZM108.5 12.897C108.5 8.67447 111.712 5.26007 116.336 5.26007C120.709 5.26007 123.892 8.42807 123.892 13.3781V14.4385H113.368C113.704 15.7335 114.929 16.8218 117.067 16.8218C118.108 16.8218 119.821 16.3686 120.681 15.5839L122.725 18.6317C121.26 19.9267 118.81 20.5633 116.55 20.5633C111.991 20.5633 108.5 17.6358 108.5 12.897Z"
                fill="currentColor"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </>
  )
}

// export const Carousel = () => {
//   return (
//     <div className="font-inter relative antialiased">
//       <main className="relative flex flex-col justify-center overflow-hidden ">
//         <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
//           <div className="text-center">
//             <div
//               x-data="{}"
//               x-init="$nextTick(() => {
//                         let ul = $refs.logos;
//                         ul.insertAdjacentHTML('afterend', ul.outerHTML);
//                         ul.nextSibling.setAttribute('aria-hidden', 'true');
//                     })"
//               className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
//             >
//               <ul
//                 x-ref="logos"
//                 // animate-infinite-scroll
//                 className="flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
//               >
//                 <li>
//                   <a href="#" className="flex items-center justify-center">
//                     <Image src={"/images/company/saz.png"} alt={'logo'} className="max-h-[100px] mix-blend-multiply" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="flex items-center justify-center">
//                     <Image src={"/images/company/eldrew.png"} alt={'logo'} className="max-h-[100px] mix-blend-darken" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="flex items-center justify-center">
//                     <Image src={"/images/company/tartak.png"} alt={'logo'} className="max-h-[100px] mix-blend-darken" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="flex items-center justify-center">
//                     <Image src={"/images/company/triwall.png"} alt={'logo'} className="max-h-[100px] mix-blend-darken" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
