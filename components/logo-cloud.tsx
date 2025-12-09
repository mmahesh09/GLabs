import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-transparent overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6 border-white/10">
                        <p className="text-end text-sm text-white/70"></p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                            <div className="flex"><img className="mx-auto h-5 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" /></div>
                            <div className="flex"><img className="mx-auto h-4 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" /></div>
                            <div className="flex"><img className="mx-auto h-4 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" /></div>
                            <div className="flex"><img className="mx-auto h-5 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" /></div>
                            <div className="flex"><img className="mx-auto h-5 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" /></div>
                            <div className="flex"><img className="mx-auto h-4 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" /></div>
                            <div className="flex"><img className="mx-auto h-7 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" /></div>
                            <div className="flex"><img className="mx-auto h-6 w-fit invert brightness-200" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" /></div>
                        </InfiniteSlider>

                        {/* Removed white overlay layers */}
                        <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                        <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
                    </div>
                </div>
            </div>
        </section>
    )
}
