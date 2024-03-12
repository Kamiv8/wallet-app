# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Kopiowanie plików projektów i przywracanie zależności
COPY *.sln .
COPY WalletApp.Application/*.csproj ./WalletApp.Application/
COPY WalletApp.Domain/*.csproj ./WalletApp.Domain/
COPY WalletApp.Infrastructure/*.csproj ./WalletApp.Infrastructure/
COPY WalletApp.Persistence/*.csproj ./WalletApp.Persistence/
COPY WalletApp.Api/*.csproj ./WalletApp.Api/
COPY Core.Tests/*.csproj ./Core.Tests/
COPY Application.Tests/*.csproj ./Application.Tests/
RUN dotnet restore

# Kopiowanie całego kodu i budowanie aplikacji
COPY . .
RUN dotnet build

# Publikacja aplikacji
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

# Ustawienie zmiennej środowiskowej ASP.NET Core
ENV ASPNETCORE_ENVIRONMENT=Development

# Uruchomienie aplikacji
ENTRYPOINT ["dotnet", "WalletApp.Api.dll"]