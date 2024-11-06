import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube, Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">الجيمرز</div>
          <ul className="flex space-x-4 space-x-reverse">
            <li><Link href="#" className="hover:text-gray-300">الرئيسية</Link></li>
            <li><Link href="#" className="hover:text-gray-300">المقالات</Link></li>
            <li><Link href="#" className="hover:text-gray-300">تسريبات</Link></li>
            <li><Link href="#" className="hover:text-gray-300">العاب مجانية</Link></li>
            <li><Link href="#" className="hover:text-gray-300">من نحن</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=384&width=1024"
              alt="Top Banner"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-center">أفضل 5 العاب هذا الشهر</h1>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">أحدث المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ArticleCard
                key={i}
                image={`/placeholder.svg?height=200&width=300&text=Article+${i}`}
                title="أفضل 5 العاب هذا الشهر"
                excerpt="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                time="منذ 8 ساعات"
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">آخر الفيديوهات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <VideoCard
                key={i}
                image={`/placeholder.svg?height=200&width=300&text=Video+${i}`}
                title={`هذا النص هو مثال لنص يمكن أن ${i}`}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">مقالاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ArticleCard
                key={i}
                image={`/placeholder.svg?height=200&width=300&text=Article+${i}`}
                title={`هذا النص هو مثال لنص يمكن أن ${i}`}
                excerpt="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">الجيمرز</h3>
              <p className="text-sm">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">تواصل معنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                <Link href="#" className="hover:text-gray-300"><Youtube /></Link>
                <Link href="#" className="hover:text-gray-300"><Facebook /></Link>
                <Link href="#" className="hover:text-gray-300"><Twitter /></Link>
                <Link href="#" className="hover:text-gray-300"><Instagram /></Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">النشرة البريدية</h4>
              <form className="flex">
                <Input type="email" placeholder="بريدك الإلكتروني" className="flex-grow" />
                <Button type="submit" className="mr-2">اشترك</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 الجيمرز. جميع الحقوق محفوظة.</p>
            <p>DESIGN BY-3BQRIINO</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArticleCard({ image, title, excerpt, time }: { image: string; title: string; excerpt: string; time?: string }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{excerpt}</p>
        {time && <p className="text-sm text-gray-500">{time}</p>}
      </div>
    </div>
  )
}

function VideoCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  )
}