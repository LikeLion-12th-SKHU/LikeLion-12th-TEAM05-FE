import { components } from '../../../../schema'
import { useInfiniteQuery } from '@tanstack/react-query'
import { axiosClient } from '@/services'

type APIResponse =
  components['schemas']['ApiResponseTemplateCurationListResDto']

const getLikedCuration = async ({
  size = 10,
  pageParam = 0,
}: {
  size: number
  pageParam: number
}) => {
  try {
    const response = await axiosClient.get<APIResponse['data']>(
      `/curation/user/like?page=${pageParam}&size=${size}`,
    )

    return {
      response: response?.data,
      current_page: pageParam,
      pageParam,
    }
  } catch (e) {
    throw e
  }
}

export const useGetLikedCuration = () => {
  return useInfiniteQuery({
    queryKey: ['getInfinityLikedCurations'],
    suspense: true,
    useErrorBoundary: true,
    queryFn: ({ pageParam }) => getLikedCuration({ pageParam, size: 12 }),
    getNextPageParam: (lastPage) => {
      return lastPage.current_page + 1
    },
  })
}
