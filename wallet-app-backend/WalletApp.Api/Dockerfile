#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5000
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["WalletApp.Api/WalletApp.Api.csproj", "WalletApp.Api/"]
COPY ["WalletApp.Application/WalletApp.Application.csproj", "WalletApp.Application/"]
COPY ["WalletApp.Domain/WalletApp.Domain.csproj", "WalletApp.Domain/"]
COPY ["WalletApp.Infrastructure/WalletApp.Infrastructure.csproj", "WalletApp.Infrastructure/"]
COPY ["WalletApp.Persistence/WalletApp.Persistence.csproj", "WalletApp.Persistence/"]
RUN dotnet restore "WalletApp.Api/WalletApp.Api.csproj"
COPY . .
WORKDIR "/src/WalletApp.Api"
RUN dotnet build "WalletApp.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WalletApp.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WalletApp.Api.dll"]