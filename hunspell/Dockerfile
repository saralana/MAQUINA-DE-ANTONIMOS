FROM python:2.7-jessie

RUN apt-get update
RUN apt-get install -y python-dev libhunspell-dev myspell-pt-br

RUN pip install hunspell

RUN mkdir -p /opt/hunspell
WORKDIR /opt/hunspell
