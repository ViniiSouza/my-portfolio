image.Bytes.Position = 0;

var request = new SearchFacesByImageRequest
{
    CollectionId = _collectionId,
    Image = image,
    MaxFaces = 1,
    FaceMatchThreshold = _similarityThreshold
};

var response = await _rekognitionClient.SearchFacesByImageAsync(request);

if (response.FaceMatches.Count == 0)
{
    return new RecognitionResponse
    {
        Success = false,
        Message = "Nenhuma face correspondente encontrada na base de dados.",
        ErrorCode = "NO_MATCH"
    };
}

var bestMatch = response.FaceMatches[0];
return new RecognitionResponse
{
    Success = true,
    PersonName = bestMatch.Face.ExternalImageId,
    Confidence = bestMatch.Similarity,
    Message = "Face reconhecida com sucesso"
};
