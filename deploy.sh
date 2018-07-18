#!/bin/bash

aws s3 cp --acl public-read --recursive dist/ s3://public.adyoulike.com/catalog/
