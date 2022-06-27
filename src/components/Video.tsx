import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import "@vime/core/themes/default.css"

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full w-max-[110px] max-h-[60vh] aspect-video">
                    <Player >
                        <Youtube videoId="KJj70dBgRPo"/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 w-max-[1100] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold ">
                            Aula 01 - Abertura do Ignite Lab
                        </h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, commodi adipisci? Veritatis doloribus, ex eum consequuntur error praesentium quisquam voluptatibus est dolor magnam. Tempora dolores porro inventore adipisci ducimus eos?
                        </p>

                        <div className="flex items-center gap-4 mt-6"> {/* professor info */}
                            <img
                                src="https://github.com/phenriquep00.png"
                                alt="professor"
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">
                                    phenriquep00
                                </strong>
                                <span className="text-gray-200 text-sm block">CTO</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 "> {/* botoes */}
                        <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            comunidade do discord
                        </a>
                        <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed ">
                            <strong className="text-2xl ">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed ">
                            <strong className="text-2xl ">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpaper exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}