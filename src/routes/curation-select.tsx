import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Button, Input } from '@/_components'
import { useCuration } from '@/_hooks/mutation/useCuration'

export const Route = createFileRoute('/curation-select')({
    component: () => {
        const mutate = useCuration()
        const [qurationName, setQurationName] = useState('')
        const [qurationDescription, setQurationDescription] = useState('')

        return (
            <main className="relative flex flex-col max-h-[700px] justify-center items-center gap-[50px] p-5">
                <h1 className="text-2xl font-bold">🐸 산책로 큐레이션 만들기</h1>

                <div className="flex flex-col gap-[15px] w-full max-w-[400px]">
                    <label htmlFor="qurationName" className="flex flex-col">
                        큐레이션 이름
                        <Input id="qurationName" className="w-[350px] mt-2" placeholder="ex)일산 산책로 맛집" onChange={(e) => setQurationName(e.target.value)} />
                    </label>
                </div>

                <div className="flex flex-col gap-[15px] w-full max-w-[400px]">
                    <label htmlFor="qurationDescription" className="flex flex-col">
                        큐레이션 설명
                        <Input id="qurationDescription" placeholder="ex)파주,일산러의 파주 일산 산책로 모음집" className="w-[350px] mt-2" value={qurationDescription} onChange={(e) => setQurationDescription(e.target.value)} />
                    </label>
                </div>

                <div className="flex flex-col gap-[15px] w-full max-w-[400px]">
                    <label htmlFor="curationPlace" className="flex flex-col">
                        산책로 장소
                        <Button
                            variant={'primary'}
                            size="xl"
                            onClick={() => {
                                mutate.mutate(
                                    { name: qurationName, content: qurationDescription },
                                    {
                                        onSuccess: (data) => console.log(data),
                                    },
                                )
                            }}
                        >
                            산책로 추가하러 가기
                        </Button>
                    </label>
                </div>
            </main>
        )
    },
})
