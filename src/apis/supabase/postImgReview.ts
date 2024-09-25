import { unitripSupabase } from '@/utils/supabaseClient';

const postImgReview = async (place: number, imgs: File[]) => {
  const imgUrls: string[] = [];

  // 각 파일을 Supabase Storage에 업로드
  for (const img of imgs) {
    const { error: uploadError } = await unitripSupabase.storage
      .from('REVIEW_IMAGES')
      .upload(`${place}/${img.name}`, img, {
        cacheControl: '3600',
      });

    if (uploadError) {
      throw new Error('이미지 업로드 과정에서 에러가 발생했습니다');
    }

    // 업로드한 파일의 URL 생성
    const publicUrl = `${import.meta.env.VITE_STORAGE_URL}/${place}/${img.name}`;
    imgUrls.push(publicUrl);
  }

  return imgUrls;
};

export default postImgReview;
