FROM python:2.7-jessie

RUN pip install -U nltk > /dev/null 2>&1
RUN python -m nltk.downloader mac_morpho > /dev/null 2>&1

WORKDIR /opt

CMD ["python", "build_word_list.py"]
